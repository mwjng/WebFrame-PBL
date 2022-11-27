//import 'src\style\modal.css';
// import Calendar from './Calendar';

// import { getModularInstance } from "@firebase/util"
// import { Component } from 'react';

// const Modal = (props) => {
//     // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
//     const { open, close, header } = props;

//     return (
//       // 모달이 열릴때 openModal 클래스가 생성된다.
//       <div className={open ? 'openModal modal' : 'modal'}>
//         {open ? (
//           <section>
//             <header>
//               {header}
//               <button className="close" onClick={close}>
//                 &times;
//               </button>
//             </header>
//             <main>{props.children}</main>
//             <footer>
//               <button className="close" onClick={close}>
//                 close
//               </button>
//             </footer>
//           </section>
//         ) : null}
//       </div>
//     );
//   };

// export default Modal;

import React from "react";
import Calendar from "./Calendar";

export const Modal = () => (
  <div>
    <h2>modal</h2>
  </div>
)
// const closeModal = () => (

//   <div className="Modal" onClick={closeModal}>
//     <div className="modalBody" onClick={(e) => e.stopPropagation()}>
//       <button id="modalCloseBtn" onClick={closeModal}>
//         ✖
//       </button>
//       {props.children}
//     </div>
//   </div>
// );



export default Modal;
