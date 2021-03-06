import React, { useState } from 'react';
import { Timeline, Switch, Select, Icon, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const rows = [
    { 
        property: 'items', 
        description: 'Timeline data array', 
        default: '', 
        type: 'object[]',
        value: ''
    },
    { 
        property: 'date', 
        description: 'Set timeline date key', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'title', 
        description: 'Set timeline title key', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'subtitle', 
        description: 'Set timeline subtitle key', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'data', 
        description: 'Set timeline custom data', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'centered', 
        description: 'Set timeline position to center', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'flatCard', 
        description: 'Set timeline data card flat', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set timeline color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | yellow | dark'
    },
    { 
        property: 'tagBorderType', 
        description: 'Set date Tag borders type', 
        default: '', 
        type: 'string',
        value: 'tile | rounded | smooth'
    },
    { 
        property: 'tagColor', 
        description: 'Set date Tag color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | yellow | dark'
    },
    { 
        property: 'tagOutlined', 
        description: 'Set timeline date Tag outlined', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'icon', 
        description: 'Set icon',
        default: '', 
        type: 'string',
        value: 'home | search | etc. (see icon names list in docs)'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const items = [
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' }
]

const usage =
`// Usage examples
import React from 'react';
import { Timeline } from '@assenti/react-ui-components';
const colors = ['primary', 'info', 'success', 'error', 'dark', 'yellow'];
const items = [
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' }
]

function Example() {
    return (
        <>
            <Timeline 
                items={items} 
                date="date"
                centered
                color="primary"
                title="title"
                subtitle="subtitle"/>
        </>
    )
}`

const colors = ['primary', 'info', 'success', 'error', 'dark', 'yellow'];
const borders = ['default', 'smooth', 'rounded', 'tile'];

const TimelinePage = () => {
    const [icon, setIcon] = useState(false);
    const [tagOutlined, setTagOutlined] = useState(false);
    const [color, setColor] = useState(colors[0]);
    const [tagColor, setTagColor] = useState(colors[1]);
    const [borderType, setBorderType] = useState(borders[0]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={rows}
                    backTopBtn
                    componentName="<Timeline/>">
                    <Switch 
                        color="primary" 
                        check={icon}
                        rightLabel="Icon"
                        className="my-10" 
                        onChange={() => setIcon(!icon)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={tagOutlined}
                        className="my-10"
                        rightLabel="Tag outlined" 
                        onChange={() => setTagOutlined(!tagOutlined)}/>
                    <br/>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        label="Timeline color"
                        color="primary"
                        className="mb-10"
                        dark={theme}
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        color="primary"
                        className="mb-10"
                        label="Tag color"
                        value={tagColor}
                        dark={theme}
                        onChange={v => setTagColor(v)}/>
                    <br/>
                    <Select
                        items={borders}
                        dark={theme}
                        prefix={<Icon name="shape"/>}
                        width={200}
                        label="Border type"
                        color="primary"
                        value={borderType}
                        onChange={v => setBorderType(v)}/>
                    <Divider/>
                    <Timeline 
                        items={items} 
                        date="date"
                        centered
                        color={color}
                        tagBorderType={borderType}
                        tagOutlined={tagOutlined}
                        tagColor={tagColor}
                        icon={icon ? 'star' : ''}
                        title="title"
                        subtitle="subtitle"/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default TimelinePage;