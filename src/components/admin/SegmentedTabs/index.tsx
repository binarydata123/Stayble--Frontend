import React from 'react';
import { Segmented } from 'antd';
import styles from './segmentedTabs.module.css';
export default function SegmentedTabs() {
	return (
		<div className={styles.antSegmented}>
			<Segmented options={['Car Details', 'Mechanic Report', 'Owner Details', 'All Bids']} />
		</div>
	);
}
