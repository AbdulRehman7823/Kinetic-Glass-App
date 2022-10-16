import React from 'react';
import CheckListItem from './CheckListItem';

export default{
    title: "List/CheckList/CheckListItem",
    component:CheckListItem,
    argTypes: { onClick: { action: 'clicked' } },
}


const Template = (args) => <CheckListItem {...args} />;
export const checkListItem = Template.bind({});
checkListItem.args={
    title: "Task Me",
}