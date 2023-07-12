'use client';

import { useEffect, useState } from 'react';

import AuthModal from '@/components/AuthModal';

const Modalprovider = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) {
		return null;
	}
	return (
		<>
			<AuthModal />
		</>
	);
};

export default Modalprovider;
