import {Button} from 'react-bootstrap';
import {ShareSocial} from 'react-share-social' 

function SocialMedia(props) {
  return (
        <ShareSocial
      url="https://monsite.com/article/123"
      socialTypes={[
        "facebook",
        "twitter",
        "whatsapp",
        "telegram",
        
      ]}
    />
  );
}

export default SocialMedia;