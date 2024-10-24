import { CiHeart } from 'react-icons/ci';
import HeaderSidebar from '../components/HeaderSidebar/HeaderSidebar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import styles from './styles.module.scss'

function WishList() {
    const {container, boxBtn} = styles;

    return <div className={container}>
    <div>
        <HeaderSidebar
            icon={
                <CiHeart
                    style={{
                        fontSize: '30px'
                    }}
                />
            }
            title='WISHLIST'
        />

        <ItemProduct />
    </div>

    <div className={boxBtn}>
        <Button content={'VIEW WISHLIST'} />
        <Button content={'ADD ALL TO CART'} isPrimary={false} />
    </div>
</div>
}

export default WishList
