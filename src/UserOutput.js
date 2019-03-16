import React from 'react';
import './UserOutput.css';


const userOutput = props => {
    return (
        <div className="MainContainer">
            <h1 className="ParaHead">Article {props.count} :  Written by: {props.username}</h1>
            <p className="Paragraph">
                Lorem ipsum dolor sit amet, et ludus epicuri singulis pri, cetero vocibus tibique ne has. Everti similique definitiones an nam, an quo nihil nostro. Ad lorem everti alterum sea. Has brute tincidunt an, sea populo semper similique ea, vidit mucius est te.
                Sed ad nullam sanctus. Odio reprehendunt at usu, has melius inimicus ad, per copiosae vituperata referrentur eu. Eu scripta blandit nec. Est nostro mollis eleifend ea, eos ut scaevola inciderint.
            </p>
            <p className="Paragraph">
                No iracundia consetetur eam. Vis ex oratio omnesque, ne eam cibo brute audiam, eu per accusam detraxit similique. Has doming constituam ex, usu ei salutatus gloriatur, ne autem debitis indoctum ius. Cum cibo solet perpetua te, habeo veniam democritum sed id. Ut suavitate consulatu imperdiet has, has facilis phaedrum ut.
                Officiis efficiantur an eam, ex novum congue platonem mel. Pri ea mutat graece intellegam, vis ex perfecto elaboraret. Ei vim labores laboramus, pertinacia neglegentur est ex, sed quas voluptatum cu. Id nec vide omnium labores, sale mutat discere has in
            </p>
        </div>
    );
}


export default userOutput;