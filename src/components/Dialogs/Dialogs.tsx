import React from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './DialogMessage/DialogMessage';
import { DialogsPageType } from '../../redux/state';

type DialogProps = {
    data: DialogsPageType;
};

export const Dialogs = (props: DialogProps) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.data.dialogsData.map((dialog) => (
                    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
                ))}
            </div>
            <div className={s.messages}>
                {props.data.messagesData.map((message) => (
                    <Message key={message.id} id={message.id} text={message.text} />
                ))}
            </div>
        </div>
    );
};
