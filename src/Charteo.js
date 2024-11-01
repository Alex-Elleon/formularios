import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

import { Card, CardBody } from "react-bootstrap"
import LinesCharteo from "./LinesCharteo"

export const Charteo = () => {
    

return (
    
    <Card>
        <h2>Ejemplo de grafica</h2>
        <CardBody>
            <LinesCharteo/>
        </CardBody>
    </Card>
)

}