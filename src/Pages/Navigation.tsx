import {Link, useParams} from 'react-router-dom';
import { Menu } from 'antd';
import {ABOUT_TEAM_ROUTE, HOME_ROUTE} from "../routes";


export const Navigation = () => {


  return (<div>

            <Link to={`${HOME_ROUTE}`} > Home </Link>

            <Link to={ABOUT_TEAM_ROUTE}>About team</Link>
      </div>
  );
};

export default Navigation;
