import { EnrolledPerson } from "@prisma/client"
import Button from "src/core/components/Button";
import styles from "./styles/EnrolledPersonInfo.module.css"

interface Props {
    enrolledPerson: EnrolledPerson;
    onClick?: () => boolean;
}

export const EnrolledPersonInfo = ({enrolledPerson, onClick}: Props) => {
    return (
        <div className={styles.content}>
            <div>
                <h4>Nombre: <span className={styles.title}>{enrolledPerson.name}</span></h4>
                <h4>Rol: <span className={styles.subtitle}>{enrolledPerson.rol}</span></h4>
            </div>
            <div>
                <p>Congregacion: <span>{enrolledPerson.church}</span></p>
                <p>Numero de telefono: <span>{enrolledPerson.phoneNumber}</span></p>
                <p>Carnet: <span>{enrolledPerson.carnet}</span></p>
            </div>
            <div>
                <p>Ingreso al evento: <span>{enrolledPerson.entrance ? "Si": "No"}</span></p>
            </div>

            <div>
                {!enrolledPerson.entrance ? (
                    <Button 
                        text="Registrar Ingreso" type="button"   
                        onClick={onClick}            
                    />
                ): null}
            </div>
        </div>
    )
}
