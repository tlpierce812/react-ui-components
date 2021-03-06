import React, { useState } from 'react';
import { AutoComplete, Select, Switch, Icon, RadioGroup, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';
import { countries } from '../data/countries';
import wordlImage from '../img/world.png';

const rows = [
    { 
        property: 'items', 
        description: 'AutoComplete options', 
        default: '', 
        type: 'string[] | object[]',
        value: ''
    },
    { 
        property: 'itemKey', 
        description: 'Set if you pass items as array of objects', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'iconKey', 
        description: 'Set icon', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'avatarKey', 
        description: 'Set avatar', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'value', 
        description: 'AutoComplete value', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onChange', 
        description: 'Invokes on input or option selection', 
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
        property: 'contentMaxHeight', 
        description: 'Set dropdown content max height (if set overflow-y: auto enabled)', 
        default: '', 
        type: 'string | number',
        value: ''
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
        property: 'borderType', 
        description: 'Set borders type', 
        default: '', 
        type: 'string',
        value: 'tile | smooth | rounded'
    },
    { 
        property: 'prefix', 
        description: 'Set prefix',
        default: '', 
        type: 'ReactNode | string | number',
        value: ''
    },
    { 
        property: 'suffix', 
        description: 'Set suffix',
        default: '', 
        type: 'ReactNode | string | number',
        value: ''
    },
    { 
        property: 'clearable',
        description: 'Enable value clearing', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onClear',
        description: 'Invokes on clear icon click (required with clearable prop)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'loading',
        description: 'Set loading state', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'whiteBackground',
        description: 'Set input background color to white', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'disabled',
        description: 'Disable AutoComplete', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'required',
        description: 'Set required flag', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'readOnly',
        description: 'Set read only flag', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'style',
        description: 'Set a custom inline styles', 
        default: '', 
        type: 'string',
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

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { AutoComplete } from '@assenti/react-ui-components';

const countries = [
    { country: 'Kazakhstan' }, 
    { country: 'Russia' }, 
    { country: 'USA' }, 
    { country: 'United Kingdom' }, 
    { country: 'Canada' }, 
    { country: 'Germany' }, 
    { country: 'France' }, 
    { country: 'China' },
    { country: 'Japan' },
    { country: 'South Korea' }
]

function Example() {
    const [country, setCountry] = useState('');

    return (
        <>
            <AutoComplete
                items={countries}
                style={{ width: 300 }}
                contentMaxHeight={300}
                itemKey="country"
                color="primary"
                label="Countries"
                placeholder="Choose your favourive country"
                onItemClick={item => setCountry(item.country)}
                clearable
                onClear={() => setCountry('')}
                listHeader={
                    <div className="fz-9 text-info py-10">
                        Start typing your favourite country
                    </div>}
                footer={(filteredLength) => 
                    <div className="text-right fz-8 text-info px-10 py-15">
                        {filteredLength} results
                    </div>}
                prefix={<Icon name="earth"/>}
                suffix={<Icon name="chevron-down"/>}/>
        </>
    )
}`

const colors = ['primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];
const borders = ['default', 'tile', 'rounded', 'smooth'];
const types = ['none','image', 'icon'];

const AutoCompletePage = () => {
    const [country, setCountry] = useState('');
    const [color, setColor] = useState('primary');
    const [size, setSize] = useState(sizes[0]);
    const [border, setBorder] = useState(borders[0]);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [prefix, setPrefix] = useState(true);
    const [suffix, setSuffix] = useState(true);
    const [label, setLabel] = useState(true);
    const [footer, setFooter] = useState(true);
    const [maxHeight, setMaxHeight] = useState(false);
    const [listHeader, setListHeader] = useState(true);
    const [type, setType] = useState(types[0]);
    const [whiteBackground, setWhiteBackground] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={rows}
                    apiSearchable
                    componentName="<AutoComplete/>">
                    <Select
                        items={colors}
                        dark={theme}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        label="Color"
                        color="primary"
                        className="my-5"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Select
                        items={sizes}
                        prefix={<Icon name="format-size"/>}
                        width={200}
                        dark={theme}
                        label="Size"
                        color="primary"
                        className="my-5"
                        value={size}
                        onChange={v => setSize(v)}/>
                    <br/>
                    <Select
                        items={borders}
                        prefix={<Icon name="shape"/>}
                        width={200}
                        dark={theme}
                        label="Border type"
                        color="primary"
                        className="my-5"
                        value={border}
                        onChange={v => setBorder(v)}/>
                    <br/>
                    <Switch 
                        check={disabled} 
                        color="primary"
                        rightLabel="Disabled" 
                        className="my-10"
                        onChange={() => setDisabled(!disabled)}/>
                    <Switch 
                        check={loading} 
                        color="primary"
                        rightLabel="Loading" 
                        className="my-10"
                        onChange={() => setLoading(!loading)}/>
                    <br/>
                    <Switch 
                        check={prefix} 
                        color="primary"
                        rightLabel="Prefix" 
                        className="my-10"
                        onChange={() => setPrefix(!prefix)}/>
                    <Switch 
                        check={suffix} 
                        color="primary"
                        rightLabel="Suffix" 
                        className="my-10"
                        onChange={() => setSuffix(!suffix)}/>
                    <Switch 
                        check={label} 
                        color="primary"
                        rightLabel="Label" 
                        className="my-10"
                        onChange={() => setLabel(!label)}/>
                    
                    <br/>
                    <Switch 
                        check={listHeader} 
                        color="primary"
                        rightLabel="List header" 
                        className="my-10"
                        onChange={() => setListHeader(!listHeader)}/>
                    <Switch 
                        check={footer} 
                        color="primary"
                        rightLabel="List footer" 
                        className="my-10"
                        onChange={() => setFooter(!footer)}/>
                    <br/>
                    <Switch 
                        check={whiteBackground} 
                        color="primary"
                        rightLabel="WhiteBackground" 
                        className="my-10"
                        onChange={() => setWhiteBackground(!whiteBackground)}/>
                    <Switch 
                        check={maxHeight} 
                        color="primary"
                        rightLabel="Set content max height (in this exmaple: 200px)" 
                        className="my-10"
                        onChange={() => setMaxHeight(!maxHeight)}/>
                    <br/>
                    <RadioGroup
                        options={types} 
                        value={type}
                        name="type"
                        className="mt-10" 
                        onChange={(value) => setType(value)}/>
                    <Divider/>
                    <AutoComplete
                        items={countries}
                        style={{ width: 300 }}
                        dark={theme}
                        contentMaxHeight={maxHeight ? 200 : null}
                        itemKey="country"
                        iconKey={type === 'icon' ? 'icon' : null}
                        avatarKey={type === 'image' ? wordlImage : null}
                        avatarBorderType="rounded"
                        avatarSize={24}
                        borderType={border}
                        color={color}
                        size={size}
                        loading={loading}
                        label={label ? 'Countries' : null}
                        placeholder="Choose your favourive country"
                        onItemClick={item => setCountry(item.country)}
                        clearable
                        onClear={() => setCountry('')}
                        className="my-10"
                        listHeader={listHeader ? <div className="fz-9 text-info py-10">
                            Start typing your favourite country
                        </div> : null}
                        footer={(filteredLength) => 
                            <div className="text-right fz-8 text-info px-10 py-15">
                                {filteredLength} results
                            </div>}
                        disabled={disabled}
                        whiteBackground={whiteBackground}
                        prefix={prefix ? <Icon name="earth"/> : null}
                        suffix={suffix ? <Icon name="chevron-down"/> : null}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default AutoCompletePage;