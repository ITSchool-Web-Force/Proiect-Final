import styles from '../styles/Home.module.css';
import MyHeader from '../components/header';
import TypesTranslation from '../components/service';
import MyJobs from '../components/job';
import ContactInformation from '../components/contact';
import Head from 'next/head'
import NavBar from '../components/navbar';
import Footer from '../components/footer'


export default function About() {
  return (   
    <>
    <Head>Traduceri</Head>
    <MyHeader />
    <NavBar />
    <TypesTranslation />
    <MyJobs />
    <ContactInformation />
    <Footer />
    </>

  )
}