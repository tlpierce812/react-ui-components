import React from 'react';
import { Tooltip } from '../components/Tooltip';
import { Button } from '../components/button/Button';

export const TooltipPage = () => {
    return (
        <div className="page">
            <div className="page-title">Tooltips</div>
            <div className="flex align-top">
                <Tooltip tooltip="Some text">
                    <p>Some text</p>
                </Tooltip>
                <div className="mx-10"></div>
                <Tooltip tooltip="Button">
                    <Button color="info" name="Button" onAction={() =>{}}/>
                </Tooltip>
            </div>
        </div>
    )
}
