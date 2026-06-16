import { useEffect, useState, useCallback } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Badge,
  Spinner,
  Alert,
  InputGroup,
  Form,
} from "react-bootstrap";

const API_URL = "https://api-ateliertm.coffeeadmin-pro.fr/api";

// ─── helpers ────────────────────────────────────────────────────────────────

const apiFetch = (path, options = {}) =>
  fetch(`${API_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  }).then((r) => r.json());

// ─── CartPage ────────────────────────────────────────────────────────────────

export default function CartPage() {
  const [cart, setCart] = useState([]); // [{ product, quantity }]
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null); // productId en cours
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  // ── Chargement du panier ──────────────────────────────────────────────────
  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      // L'API renvoie { productId: quantity, ... }
      const sessionCart = await apiFetch("/cart");

      if (!sessionCart || Object.keys(sessionCart).length === 0) {
        setCart([]);
        return;
      }

      // Charger les détails de chaque produit
      const items = await Promise.all(
        Object.entries(sessionCart).map(async ([productId, quantity]) => {
          const product = await apiFetch(`/products/${productId}`);
          return { product, quantity };
        })
      );
      setCart(items);
    } catch (e) {
      setError("Impossible de charger le panier.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // ── Modifier la quantité ──────────────────────────────────────────────────
  const updateQuantity = async (productId, newQty) => {
    if (newQty < 1) return;
    try {
      setActionLoading(productId);
      // On vide puis réajoute avec la nouvelle quantité
      await apiFetch("/cart/remove/" + productId, { method: "DELETE" });
      await apiFetch("/cart/add", {
        method: "POST",
        body: JSON.stringify({ productId, quantity: newQty }),
      });
      await fetchCart();
    } catch {
      setError("Erreur lors de la mise à jour.");
    } finally {
      setActionLoading(null);
    }
  };

  // ── Supprimer un article ──────────────────────────────────────────────────
  const removeItem = async (productId) => {
    try {
      setActionLoading(productId);
      await apiFetch("/cart/remove/" + productId, { method: "DELETE" });
      setCart((prev) => prev.filter((i) => i.product.id !== productId));
    } catch {
      setError("Erreur lors de la suppression.");
    } finally {
      setActionLoading(null);
    }
  };

  // ── Vider le panier ───────────────────────────────────────────────────────
  const clearCart = async () => {
    try {
      setActionLoading("clear");
      await apiFetch("/cart/clear", { method: "DELETE" });
      setCart([]);
      setSuccessMsg("Panier vidé.");
      setTimeout(() => setSuccessMsg(null), 3000);
    } catch {
      setError("Erreur lors du vidage du panier.");
    } finally {
      setActionLoading(null);
    }
  };

  // ── Totaux ────────────────────────────────────────────────────────────────
  const totalTTC = cart.reduce(
    (sum, { product, quantity }) => sum + (product.priceTTC ?? 0) * quantity,
    0
  );
  const totalItems = cart.reduce((sum, { quantity }) => sum + quantity, 0);

  // ── Image helper ──────────────────────────────────────────────────────────
  const getImage = (product) => {
    if (product.image && product.image.length > 0) {
      return product.image[0].url ?? product.image[0].path ?? null;
    }
    return null;
  };

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <Container className="py-5" style={{ maxWidth: 960 }}>
      {/* ── Header ── */}
      <Row className="align-items-center mb-4">
        {cart.length > 0 && (
          <Col xs="auto">
            <Button
              variant="outline-danger"
              size="sm"
              onClick={clearCart}
              disabled={actionLoading === "clear"}
            >
              {actionLoading === "clear" ? (
                <Spinner size="sm" />
              ) : (
                "🗑 Vider le panier"
              )}
            </Button>
          </Col>
        )}
      </Row>

      {/* ── Alertes ── */}
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      {successMsg && <Alert variant="success">{successMsg}</Alert>}

      {/* ── Chargement ── */}
      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
          <p className="mt-3 text-muted">Chargement du panier…</p>
        </div>
      ) : cart.length === 0 ? (
        /* ── Panier vide ── */
        <Card className="text-center border-0 shadow-sm py-5">
          <Card.Body>
            <div style={{ fontSize: "3rem" }}>🛒</div>
            <h5 className="mt-3 fw-semibold">Votre panier est vide</h5>
            <p className="text-muted">Ajoutez des produits pour commencer.</p>
            <Button variant="dark" href="/products">
              Voir les produits
            </Button>
          </Card.Body>
        </Card>
      ) : (
        /* ── Contenu du panier ── */
        <Row className="g-4">
          {/* ── Liste articles ── */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-0">
                <Table responsive className="mb-0 align-middle">
                  <thead className="table-light">
                    <tr>
                      <th style={{ width: 80 }}></th>
                      <th>Produit</th>
                      <th className="text-center">Quantité</th>
                      <th className="text-end">Prix TTC</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(({ product, quantity }) => {
                      const img = getImage(product);
                      const isLoading = actionLoading === product.id;
                      return (
                        <tr key={product.id}>
                          {/* Image */}
                          <td className="ps-3">
                            {img ? (
                              <img
                                src={img}
                                alt={product.name}
                                style={{
                                  width: 60,
                                  height: 60,
                                  objectFit: "cover",
                                  borderRadius: 8,
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  width: 60,
                                  height: 60,
                                  background: "#f0f0f0",
                                  borderRadius: 8,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "1.5rem",
                                }}
                              >
                                📦
                              </div>
                            )}
                          </td>

                          {/* Nom */}
                          <td>
                            <div className="fw-semibold">{product.name}</div>
                            {product.description && (
                              <small className="text-muted">
                                {product.description.slice(0, 60)}
                                {product.description.length > 60 ? "…" : ""}
                              </small>
                            )}
                          </td>

                          {/* Quantité */}
                          <td className="text-center" style={{ minWidth: 130 }}>
                            <InputGroup size="sm" style={{ width: 110, margin: "0 auto" }}>
                              <Button
                                variant="outline-secondary"
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                disabled={isLoading || quantity <= 1}
                              >
                                −
                              </Button>
                              <Form.Control
                                readOnly
                                value={isLoading ? "…" : quantity}
                                className="text-center"
                              />
                              <Button
                                variant="outline-secondary"
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                disabled={isLoading}
                              >
                                +
                              </Button>
                            </InputGroup>
                          </td>

                          {/* Prix */}
                          <td className="text-end fw-semibold pe-3">
                            {((product.priceTTC ?? 0) * quantity).toFixed(2)} €
                          </td>

                          {/* Supprimer */}
                          <td className="pe-3">
                            <Button
                              variant="link"
                              className="text-danger p-0"
                              onClick={() => removeItem(product.id)}
                              disabled={isLoading}
                              title="Supprimer"
                            >
                              {isLoading ? <Spinner size="sm" /> : "✕"}
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* ── Récap commande ── */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5 className="fw-bold mb-4">Récapitulatif</h5>

                <div className="d-flex justify-content-between mb-2 text-muted">
                  <span>Sous-total ({totalItems} article{totalItems > 1 ? "s" : ""})</span>
                  <span>{totalTTC.toFixed(2)} €</span>
                </div>

                <div className="d-flex justify-content-between mb-2 text-muted">
                  <span>Livraison</span>
                  <span className="text-success">Gratuite</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                  <span>Total TTC</span>
                  <span>{totalTTC.toFixed(2)} €</span>
                </div>

                <Button
                  variant="dark"
                  size="lg"
                  className="w-100"
                  onClick={() => alert("Page commande à venir !")}
                >
                  Passer commande →
                </Button>

                <Button
                  variant="link"
                  className="w-100 text-muted mt-2"
                  href="/products"
                >
                  ← Continuer mes achats
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}
