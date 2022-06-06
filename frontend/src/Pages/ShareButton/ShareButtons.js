import React from "react";

import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon, RedditShareButton, RedditIcon } from "react-share";

const ShareButtons = ({ title, url, twitterHandle, tags }) => {
   return (
      <div>
         <FacebookShareButton className='mr-8 ml-20' url={url}>
            <FacebookIcon size={40} round={true} />
         </FacebookShareButton>

         <TwitterShareButton url={url} className='mr-8 ml-20' title={title} via={twitterHandle} hashtags={tags}>
            <TwitterIcon size={40} round={true} />
         </TwitterShareButton>

         <LinkedinShareButton className='mr-8 ml-20' url={url}>
            <LinkedinIcon size={40} round={true} />
         </LinkedinShareButton>

         <WhatsappShareButton className='mr-8 ml-20' url={url} title={title}>
            <WhatsappIcon size={40} round={true} />
         </WhatsappShareButton>

         <RedditShareButton className='mr-8 ml-20' url={url}>
            <RedditIcon size={40} round={true} />
         </RedditShareButton>

         <TelegramShareButton className='mr-8 ml-20' url={url}>
            <TelegramIcon size={40} round={true} />
         </TelegramShareButton>
      </div>
   );
};
export default ShareButtons;
