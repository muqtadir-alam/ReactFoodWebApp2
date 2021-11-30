import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterIcon,
	TelegramIcon,
	WhatsappIcon,
	GooglePlusIcon,
	LinkedinIcon,
	PinterestIcon,
	VKIcon,
	OKIcon,
	RedditIcon,
	TumblrIcon,
	LivejournalIcon,
	MailruIcon,
	ViberIcon,
	WorkplaceIcon,
	EmailIcon,
	GooglePlusShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	TelegramShareButton,
	WhatsappShareButton,
	PinterestShareButton,
	VKShareButton,
	OKShareButton,
	RedditShareButton,
	TumblrShareButton,
	LivejournalShareButton,
	MailruShareButton,
	ViberShareButton,
	WorkplaceShareButton,
	EmailShareButton,
} from 'react-share';
export const ShareModal = props => {
	const shareurl = window.location.href || 'share url issue';
	return (
		<>
			<Modal
				{...props}
				// size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						Share Your Content
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='p-4 d-flex justify-content-around'>
						<FacebookShareButton url={shareurl}>
							<FacebookIcon size={40} round={true} />
						</FacebookShareButton>

						<TelegramShareButton url={shareurl}>
							<TelegramIcon size={40} round={true} />
						</TelegramShareButton>
						<WhatsappShareButton url={shareurl}>
							<WhatsappIcon size={40} round={true} />
						</WhatsappShareButton>
						<EmailShareButton url={shareurl}>
							<EmailIcon size={40} round={true} />
						</EmailShareButton>
						<TwitterShareButton url={shareurl}>
							<TwitterIcon size={40} round={true} />
						</TwitterShareButton>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
