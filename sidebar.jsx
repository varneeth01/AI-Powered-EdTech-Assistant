import "./sidebar.css";

import Sone from './side1.jsx';
import Stwo from './side2.jsx';
import Sthree from './side3.jsx';
import Sfour from './side4.jsx';
import Sfive from './side5.jsx';
import Ssix from './side6.jsx';
import Sseven from './side7.jsx';
import Seight from './side8.jsx';
import Snine from './side9.jsx';

export default function Sidebar() {
    return (
        <div className="sidebar">
          
            <div style={{ marginBottom: '20px' }}><Sone /></div>
            <div style={{ marginBottom: '20px' }}><Stwo /></div>
            <div style={{ marginBottom: '20px' }}><Sthree /></div>
            <div style={{ marginBottom: '20px' }}><Sfour /></div>
            <div style={{ marginBottom: '20px' }}><Sfive /></div>
            <div style={{ marginBottom: '20px' }}><Ssix /></div>
            <div style={{ marginBottom: '20px' }}><Sseven /></div>
            <div style={{ marginBottom: '20px' }}><Seight /></div>
            <div style={{ marginBottom: '20px' }}><Snine /></div>
        </div>
    );
}
