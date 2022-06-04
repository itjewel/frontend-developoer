import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../../styles/Home.module.css';

export default function Home() {
    let navigate = useNavigate();
    const [deviceData, setDeviceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notifiyStatus, setNotifiyStatus] = useState(false);

    useEffect(() => {
        notifypost()
        const interval = setInterval(async () => {
            await axios.get("http://35.201.2.209:8000/devices").then(({ data }) => {
                setDeviceData([...data.devices])
                setLoading(false);
            }).catch((error) => {
                setLoading(false);

            });
        }, 5000)
        return () => clearInterval(interval);
    }, [])

    async function notifypost() {
        let storage = JSON.parse(localStorage.getItem('accessStorage'));
        const data = {
            "name": "jewel",
            "email": (storage && storage.emailAddress),
            "repoUrl": "string",
            "message": "This is a test"
        }
        const config = {
            headers: { Authorization: `Bearer ${(storage && storage.accessToken)}` }
        };
        await axios.post("http://35.201.2.209:8000/notify", data, config).then((response) => {
            setNotifiyStatus(true)

        }).catch((error) => {
            return navigate("/login");
        });
    }

    return (
        <>
            {loading && <p className="loding" style={{ marginLeft: '45%', position: 'absolute', marginTop: '50px' }}>Loding..........</p>}
            <div className={`container  ${classes.containerBg}`}>
                {/* In need devices name show need to comment out below */}
                {/* {deviceData.map((value, index) => (
                    <p key={value.id}>{value.name}</p>
                ))} */}
                <h2> Total Online Device: {deviceData.length}</h2>
                {/* Orbit data show here */}
                <div id="circleOrbitContainer">
                    {deviceData.map((value, index) => {
                        let random = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
                        let leftValue = Math.round(value.id * random);
                        let topValue = Math.round(value.id * random);
                        return (
                            <div key={value.id} style={{ position: 'absolute', top: '0', left: '0', width: '400px', height: '400px', borderRadius: '100%', WebkitAnimation: 'spin-right 20s linear infinite', animation: 'spin-right 20s linear infinite' }}>
                                <div className="outer-orbit-cirlces" style={{ position: 'absolute', top: `${topValue}px`, left: `${leftValue}px`, height: '30px', width: '30px', borderRadius: '100%', backgroundColor: '#00FFCA' }}></div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </>
    );
}