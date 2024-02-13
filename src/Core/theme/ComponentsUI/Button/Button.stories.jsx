import { Button } from "@chakra-ui/react";
import React from "react";

export default {
    title: "UI/Button",
    component: Button,
    argTypes: {
        children: {
            type: "string",
            description: "Контент кнопки",
            defaultValue: "Click"
        },
        color: {
            type: "string",
            description: "Цвет текста кнопки",
            options: ['black', 'blue', 'red'],
            defaultValue: "black",
            control: {
                type: 'radio'
            }
        },
        bgColor: {
            type: "string",
            description: "Цвет фона кнопки",
            options: ['white', 'blue', 'green'],
            defaultValue: "white",
            control: {
                type: 'radio'
            }
        },
        _hover: {
            type: 'row',
            description: "Реакция на наведение на кнопку",
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'Компонент кнопки, который можно использовать для её отображения, значения по умолчанию, для color: black, для bgColor - white',
            },
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Accent = Template.bind({});
Accent.args = {
    children: "Click Me",
    color: 'black',
    bgColor: 'white',
    _hover: {
        bgColor: 'black',
        color: 'yellow'
    },
};