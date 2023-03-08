import React from 'react';

import { useWorkshopData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import DataLayout from '../containers/DataLayout';

const pageTitle = 'Workshops';

const Workshops = () => {
    const workshopData = useWorkshopData();

    return (
        <Page currentPage={`workshops`}>
            <DataLayout dataProp={workshopData} type="workshop" />
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Workshops;