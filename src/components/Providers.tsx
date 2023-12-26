'use client';
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';
import { AuthContextProvider } from '../Context/AuthContext';
import AntdConfig from '@/lib/AntdConfig';

interface Props {
	children: ReactNode;
}

const Providers = (props: Props) => {
	return (
		<AntdConfig>
			<AuthContextProvider>
				<SessionProvider>{props.children}</SessionProvider>
			</AuthContextProvider>
		</AntdConfig>
	);
};

export default Providers;
