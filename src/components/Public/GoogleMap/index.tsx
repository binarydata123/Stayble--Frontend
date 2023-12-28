import Head from 'next/head';
const GoogleMap = ({ src, height, width }: any) => {
	return (
		<>
			<Head>
				<meta name="referrer" content="no-referrer-when-downgrade" />
			</Head>
			<iframe src={src} width={width} height={height} style={{ border: 0 }} loading="lazy"></iframe>
		</>
	);
};

export default GoogleMap;
