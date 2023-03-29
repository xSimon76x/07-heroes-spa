import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from '../helpers'

export const HeroesPage = () => {

    const { horoeId, ...rest } = useParams();
    const navigate = useNavigate();

    const hero = getHeroById(horoeId);
    
    const onNavigateBack = () => {
        navigate(-1); //devuelve al historial anterior
        // navigate('/marvel');
    };

    if (!hero) {
        return <Navigate to="/marvel" />;
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `/assets/heroes/${ horoeId }.jpg` }
                    alt={ hero.superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
            
                <h3> { hero.superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter Ego: </b>
                        {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>
                        {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: </b>
                        {hero.first_appearance}
                    </li>
                </ul>

                <h5 className="mt-3">
                    Characters
                </h5>
                <p>
                    {
                        hero.characters
                    }
                </p>

                <button
                    className="btn btn-primary"
                    onClick={onNavigateBack}
                >
                    Volver
                </button>
            </div>
          
       
        </div>
    )
}