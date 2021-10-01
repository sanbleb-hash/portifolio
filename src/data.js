import { AiOutlineHome } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import {
	FaProjectDiagram,
	FaFacebookF,
	FaTwitter,
	FaPinterestP,
} from 'react-icons/fa';

export const data = {
	navigation: [
		{
			title: 'home',
			homeIcon: <AiOutlineHome />,
			url: '/',
		},
		{
			title: 'portifolio',
			portfiloIcon: <FaProjectDiagram />,
			url: '/portfolio',
		},
		{ title: 'contact', contactIcon: <MdEmail />, url: '/contact' },
	],
	socialMedia: [
		{ icons: <FaFacebookF /> },
		{ icons: <FaTwitter /> },
		{ icons: <FaPinterestP /> },
	],
};
