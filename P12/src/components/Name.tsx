// import {getUserData} from "../api/api"
import { useEffect } from "react";
// import {User} from "../types/types"
type NameProps = {
  name?: string;
};

const Name: React.FC = ({ name }: NameProps) => {
  // const [userName, setUserName] = useState();
  useEffect(() => {
    const getUser = async () => {
      try {
        // récupérer les données
      } catch (error) {
        // Gérer les erreurs ici si nécessaire
      }
    };

    getUser();
  }, []);
  return (
    <div className="name">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <p>Félicitations ! Vous avec explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Name;
