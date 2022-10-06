/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Este es el mensaje en la etiqueta
    */
    label: string;
    /**
    * Este es el tamaño en la etiqueta
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Este es el color de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Permite Capitalizar todas las letras
     */
    allCaps?: boolean;
    /**
     * Permite establecer un color custom
     */
    customFontColor?: string;
    /**
     * Permite elegir el background color de nuestra etiqueta
     */
    backgroundColor: string;
}
export declare const MyLabel: ({ size, label, color, allCaps, customFontColor, backgroundColor }: MyLabelProps) => JSX.Element;
