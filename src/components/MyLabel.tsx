import './mylabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';

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
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
   * Permite Capitalizar todas las letras
   */
  allCaps?: boolean
  /**
   * Permite establecer un color custom
   */
   customFontColor?: string
   /**
    * Permite elegir el background color de nuestra etiqueta
    */
    backgroundColor: string
}

export const MyLabel = ({
  size = 'normal',
  label = 'No Label',
  color = 'primary',
  allCaps = false,
  customFontColor,
  backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span 
    className={`label ${size} text-${color}`}
    style={{
      color: customFontColor,
      backgroundColor
    }}
    >
      {
        allCaps
          ? label.toUpperCase()
          : label
      }
    </span>
  )
}

export default MyLabel;