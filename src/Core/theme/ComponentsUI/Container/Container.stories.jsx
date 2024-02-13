import { Container } from "@chakra-ui/react";
import React from "react";

export default {
    title: "UI/Container",
    component: Container,
    argTypes: {
        children: {
            type: "string",
            description: "Контент кнопки",
            defaultValue: "Click "
        },
        color: {
            type: "string",
            description: "Цвет текста внутри контейнера",
            defaultValue: "white",
        },
        bgColor: {
            type: "string",
            description: "Цвет фона контейнера",
            defaultValue: "black",
        },
        w: {
            type: "string",
            description: "ширина контейнера",
            defaultValue: "100%"
        },
        h: {
            type: "string",
            description: "высота контейнера",
            defaultValue: "100%"
        },
        p: {
            type: "string",
            description: "padding контейнера",
            defaultValue: "0"
        },
        m: {
            type: "string",
            description: "margin контейнера",
            defaultValue: "0"
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'Компонент контейнера, который можно использовать для создания контейнера, значения по умолчанию: color: white, bgColor: black, w: 100vw, h: 100vh, p: 0, m: 0',
            },
        },
    },
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Click Me",
    color: 'white',
    bgColor: 'black',
    w: '100vw',
    h: '100vh',
    p: "0",
    m: "0"
};