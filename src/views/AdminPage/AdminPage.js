import classes from './AdminPage.module.scss';
import {Layout, Content, Header, Sidebar} from '../../components';

const AdminPage = () => {
  return (
    <Layout content={<Content/>} header={<Header/>} sidebar={<Sidebar/>}/>
  );
};

export default AdminPage;
