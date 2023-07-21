import React from 'react'
import "./tabla.css"

export default function Tabla({ historial }) {
    return (
        <section className="table-container">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        {historial ? <th>Fecha de compra</th> : null}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-row-product'>
                        <td><img src="/images/mascarilla.png" alt="" /> </td>
                        <td>Mascarilla de Coco <br />
                            Color: blanco</td>
                        <td>$1111</td>
                        <td>5u</td>
                        {historial ? <td>15/7/2023</td> : null}
                        <td className="total-producto">$5555</td>
                    </tr>
                    <tr className='table-row-product'>
                        <td><img src="/images/mascarilla.png" alt="" /></td>
                        <td>Mascarilla de Coco <br />
                            Color: negro</td>
                        <td>$2222</td>
                        <td>22u</td>
                        {historial ? <td>15/7/2023</td> : null}
                        <td className="total-producto">$99999</td>
                    </tr>
                    <tr className='table-row-product'>
                        <td><img src="/images/mascarilla.png" alt="" /></td>
                        <td>Mascarilla de Aloe Vera <br />
                            Color: verde</td>
                        <td>$9741</td>
                        <td>1u</td>
                        {historial ? <td>15/7/2023</td> : null}
                        <td className="total-producto">$777</td>
                    </tr>
                    <tr className='table-row-product'>
                        <td><img src="/images/mascarilla.png" alt="" /> </td>
                        <td>Mascarilla de Coco <br />
                            Color: blanco</td>
                        <td>$1111</td>
                        <td>5u</td>
                        {historial ? <td>15/7/2023</td> : null}
                        <td className="total-producto">$5555</td>
                    </tr>
                    <tr className='table-row-product'>
                        <td><img src="/images/mascarilla.png" alt="" /> </td>
                        <td>Mascarilla de Coco <br />
                            Color: blanco</td>
                        <td>$1111</td>
                        <td>5u</td>
                        {historial ? <td>15/7/2023</td> : null}
                        <td className="total-producto">$5555</td>
                    </tr>
                    <tr className='table-row-product'>
                        <td><img src="/images/mascarilla.png" alt="" /> </td>
                        <td>Mascarilla de Coco <br />
                            Color: blanco</td>
                        <td>$1111</td>
                        <td>5u</td>
                        {historial ? <td>15/7/2023</td> : null}
                        <td className="total-producto">$5555</td>
                    </tr>
                    <tr className='table-row-product'>
                        <td><img src="/images/mascarilla.png" alt="" /> </td>
                        <td>Mascarilla de Coco <br />
                            Color: blanco</td>
                        <td>$1111</td>
                        <td>5u</td>
                        {historial ? <td>15/7/2023</td> : null}
                        <td className="total-producto">$5555</td>
                    </tr>
                    <tr className='table-row-product'>
                        <td><img src="/images/mascarilla.png" alt="" /> </td>
                        <td>Mascarilla de Coco <br />
                            Color: blanco</td>
                        <td>$1111</td>
                        <td>5u</td>
                        {historial ? <td>15/7/2023</td> : null}
                        <td className="total-producto">$5555</td>
                    </tr>
                    <tr className='table-row-product'>
                        <td><img src="/images/mascarilla.png" alt="" /> </td>
                        <td>Mascarilla de Coco <br />
                            Color: blanco</td>
                        <td>$1111</td>
                        <td>5u</td>
                        {historial ? <td>15/7/2023</td> : null}
                        <td className="total-producto">$5555</td>
                    </tr>
                    <tr className='table-row-product'>
                        <td><img src="/images/mascarilla.png" alt="" /> </td>
                        <td>Mascarilla de Coco <br />
                            Color: blanco</td>
                        <td>$1111</td>
                        <td>5u</td>
                        {historial ? <td>15/7/2023</td> : null}
                        <td className="total-producto">$5555</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
