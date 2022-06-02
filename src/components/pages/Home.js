import classes from '../../styles/Home.module.css';
export default function Home() {
    return (
        <>
        <div className={`container  ${classes.containerBg}`}>
            <div className={classes.deviceCount}>3
               <p className={classes.devicesOnline}>DIVICES ONLINE</p>
            </div>
        
        </div>
         </>
    );
}