import React, { useState, createRef } from 'react';
import { Select, Table, Card, Collapse, Icon, BackTopBtn, Tag } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const rows = [
    { 
        property: 'items', 
        description: 'Select options', 
        default: '', 
        type: 'string[] | object[]',
        value: ''
    },
    { 
        property: 'itemName', 
        description: 'Set if you pass items as array of objects', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onChange', 
        description: 'Invokes in select option select (return item value)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'childrenKey', 
        description: 'Set if you pass items with children array (pass the key of item that has children array)', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'searchable', 
        description: 'Enable searching field in select menu (has effect only with one level list)', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'search', 
        description: 'Pass search state value', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onSearch', 
        description: 'Invokes on search value change (return search value)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'size', 
        description: 'Set select size', 
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'width', 
        description: 'Set select width', 
        default: 'auto', 
        type: 'string | number',
        value: '100px | 100% | 100'
    },
    { 
        property: 'label', 
        description: 'Set select label', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'placeholder', 
        description: 'Set placeholder', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set select color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'rounded', 
        description: 'Make border radius rounded',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'prefix', 
        description: 'Set prefix',
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const countries = [
    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] }
]

const simpleUsage = 
`// Usage examples
import React, { useState } from 'react';
import { Select } from '@assenti/react-ui-components';

const countries = [
    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] }
]

function Example() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    return (
        <div className="pa-20">
            <Select
                items={countries}
                prefix={<Icon name="earth"/>}
                itemTitle="country"
                label="Select your favourite country"
                width={250}
                color="info"
                placeholder="Countries"
                value={country}
                onChange={v => setCountry(v)}/>
            <Select
                className="ml-20"
                label="Select your favourite city"
                items={countries}
                itemTitle="country"
                childrenKey="cities"
                color="primary"
                width={250}
                placeholder="Cities"
                value={city}
                onChange={v => setCity(v)}/>
        </div>
    )
}`

const searchUsage = 
`// Usage examples
import React, { useState } from 'react';
import { Select } from '@assenti/react-ui-components';

const countries = [
    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] }
]

function Example() {
    const [country_, setCountry_] = useState('');
    const [search, setSearch] = useState('');

    return (
        <div className="pa-20">
            <Select
                items={countries}
                prefix={<Icon name="earth"/>}
                itemTitle="country"
                label="Select your favourite country"
                width={250}
                search={search}
                searchable
                onSearch={value => setSearch(value)}
                color="info"
                placeholder="Countries"
                value={country_}
                onChange={value => setCountry_(value)}/>
            <Select
                items={countries}
                prefix={<Icon name="earth"/>}
                itemTitle="country"
                label="Select your favourite country"
                width={250}
                search={search}
                searchable
                rounded
                className="ml-20"
                onSearch={value => setSearch(value)}
                color="info"
                placeholder="Countries"
                value={country_}
                onChange={value => setCountry_(value)}/>
        </div>
    )
}`

export const SelectPage = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [country_, setCountry_] = useState('');
    const [search, setSearch] = useState('');
    const parent = createRef();
    const api = createRef();

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="rui-page-title">
                    Select Component <Tag iconLeft="hammer" value="WIP" small color="error"/>
                </div>
                <div className="rui-link fz-13 fw-bold mr-10" onClick={() => goToApi()}>API</div>
            </div>
            <Card outlined color="primary" title="Simple Selects">
                <Select
                    items={countries}
                    prefix={<Icon name="earth"/>}
                    itemTitle="country"
                    label="Select your favourite country"
                    width={250}
                    color="info"
                    placeholder="Countries"
                    value={country}
                    onChange={v => setCountry(v)}/>
                <Select
                    className="ml-20"
                    label="Select your favourite city"
                    items={countries}
                    itemTitle="country"
                    childrenKey="cities"
                    color="primary"
                    width={250}
                    placeholder="Cities"
                    value={city}
                    onChange={v => setCity(v)}/>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {simpleUsage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Simple Select with searching">
                <Select
                    items={countries}
                    prefix={<Icon name="earth"/>}
                    itemTitle="country"
                    label="Select your favourite country"
                    width={250}
                    size="medium"
                    search={search}
                    searchable
                    onSearch={value => setSearch(value)}
                    color="info"
                    placeholder="Countries"
                    value={country_}
                    onChange={value => setCountry_(value)}/>
                <Select
                    items={countries}
                    prefix={<Icon name="earth"/>}
                    itemTitle="country"
                    label="Select your favourite country"
                    width={250}
                    search={search}
                    searchable
                    rounded
                    className="ml-20"
                    onSearch={value => setSearch(value)}
                    color="info"
                    placeholder="Countries"
                    value={country_}
                    onChange={value => setCountry_(value)}/>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {searchUsage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <BackTopBtn setRef={parent} dark size="medium"/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={rows}
                index={true}
                itemTitles={keys}/>
        </div>
        
    )
}
