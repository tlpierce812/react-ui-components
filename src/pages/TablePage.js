import React from 'react';
import { Table } from '../components/table';
import { Button } from '../components/button';
import { Tooltip } from '../components/tooltip';

export const TablePage = () => {
    const items = [
        { country: 'Kazakhstan', capital: 'Nur-Sultan', population: 1029556 }, 
        { country: 'Russia', capital: 'Moscow', population: 12476000 }, 
        { country: 'USA', capital: 'Washington, D.C.', population: 711571 }, 
        { country: 'United Kingdom', capital: 'London', population: 8787892 }, 
        { country: 'China', capital: 'Beijing', population: 21542000 }
    ];

    const headers = ['Country', 'Capital', 'Population'];
    const headers2 = ['Country', 'Capital', 'Population'];

    return (
        <div className="page">
            <div className="page-title">Tables</div>
            <h3>Table with order index, no hover and footer</h3>
            <Table
                bordered
                noHover={true} 
                headers={headers}
                items={items}
                index={true}
                footer={<div>I am a footer</div>}
                itemTitles={['country', 'capital', 'population']}/>
            <h3>Table with checkboxes and controls</h3>
            <Table
                bordered
                checkbox 
                headers={headers2}
                items={items}
                itemTitles={['country', 'capital', 'population']}
                controls={
                    <div className="row justify-center align-center">
                        <Tooltip tooltip="Edit">
                            <Button
                                small
                                className="mr-10"
                                color="light"
                                icon="edit"
                                onClick={() => {}}>
                            </Button>
                        </Tooltip>
                        <Tooltip tooltip="Delete">
                            <Button
                                small
                                color="light"
                                icon="delete"
                                onClick={() => {}}>
                            </Button> 
                        </Tooltip>
                    </div>
                }/>
        </div>
    )
}