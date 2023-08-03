import react from 'react'
import styles from './functional.module.css'
import { inter, montserrat, montserratNormal } from '@/app/fonts'
import { Block } from '../block'


interface IFunctionalBlock{
    src: string;
    head: string;
    description: string;
}

const FunctionalBlock: react.FC<IFunctionalBlock> = (props) => {
    return <Block className={styles.block}>
            <img src={props.src} alt="" width={64}/>
            <div className={styles.block__head}>{props.head}</div>
            <div className={styles.block__descr + ' ' + inter.className}>{props.description}</div>
        </Block>
}


export const Functional: react.FC = () => {

    // react.useEffect(() => {
    //     function isElementVisible(el: any) {
    //         var rect     = el.getBoundingClientRect(),
    //             vWidth   = window.innerWidth || document.documentElement.clientWidth,
    //             vHeight  = window.innerHeight || document.documentElement.clientHeight,
    //             efp      = function (x: any, y: any) { return document.elementFromPoint(x, y) };     
        
    //         // Return false if it's not in the viewport
    //         if (rect.right < 0 || rect.bottom < 0 
    //                 || rect.left > vWidth || rect.top > vHeight)
    //             return false;
        
    //         // Return true if any of its four corners are visible
    //         return (
    //               el.contains(efp(rect.left,  rect.top))
    //           ||  el.contains(efp(rect.right, rect.top))
    //           ||  el.contains(efp(rect.right, rect.bottom))
    //           ||  el.contains(efp(rect.left,  rect.bottom))
    //         );
    //     }
    //     var mouseWheelEvt = function (event: any) {
    //         if ((document as any).body.doScroll)
    //             (document as any).body.doScroll(event.wheelDelta>0?"left":"right");
    //         else if ((event.wheelDelta || event.detail) > 0)
    //             document.body.scrollLeft -= 10;
    //         else
    //             document.body.scrollLeft += 10;
        
    //         return false;
    //     }
    //     document.body.addEventListener("mousewheel", mouseWheelEvt);
    // })

    return <div className={styles.centered}>
        <div className={styles.sized}>
            <div className={styles.size__box}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.pink + ' ' + montserrat.className}>ФУНКЦИОНАЛ</div>
                        <div className={styles.header__head + ' ' + montserrat.className}>Чем мы можем вам помочь</div>
                    </div>
                    <div className={styles.blocks}>
                        <FunctionalBlock 
                            src='/destination.png'
                            head='Освобождаем от рутины'
                            description='С нашим сервисом вы можете спланировать тур за 2 минуты'
                        />
                        <FunctionalBlock 
                            src='/booking.png'
                            head='Интересные предложения'
                            description='Мы поможем найти вам  необычные места для путешествий'
                        />
                        <FunctionalBlock 
                            src='/cloud.png'
                            head='Сезонность'
                            description='В планировании туров мы учитываем климат и сезонность.'
                        />
                    </div>
                </div>
    
            </div>
        </div>
    </div>
}