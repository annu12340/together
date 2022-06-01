import React from "react";

import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";

const ShareButtons = ({ title, url, twitterHandle, tags }) => {
   return (
      <div>
         <FacebookShareButton className='mr-8' url={url}>
            <FacebookIcon size={40} round={true} />
         </FacebookShareButton>

         <TwitterShareButton url={url} className='mr-8' title={title} via={twitterHandle} hashtags={tags}>
            <TwitterIcon size={40} round={true} />
         </TwitterShareButton>

         <LinkedinShareButton className='mr-8' url={url}>
            <LinkedinIcon size={40} round={true} />
         </LinkedinShareButton>

         <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={40} round={true} />
         </WhatsappShareButton>
      </div>
   );
};
export default ShareButtons;
