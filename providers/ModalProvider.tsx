'use client';

import { useEffect, useState } from 'react';

import AuthModal from '@/components/AuthModal';
import UploadModal from '@/components/UploadModal';
import SubscribeModal from '@/components/SubscribeModal';
import { ProductWithPrice } from '@/types';

interface ModalproviderProps {
	products: ProductWithPrice[];
}

const Modalprovider: React.FC<ModalproviderProps> = ({ products }) => {
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
			<UploadModal />
			<SubscribeModal products={products} />
		</>
	);
};

export default Modalprovider;
