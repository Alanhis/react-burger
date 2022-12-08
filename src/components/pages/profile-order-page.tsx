import PagesStyle from '../pages/pages.module.css';
import { data } from '../../utils/testdata';
import { ProfileOrder } from '../app/profile-elements/profile-order';
export function ProfileOrderPage() {
  const testData = data;
  return (
    <div className={`${PagesStyle.scroller_profile} custom-scroll pl-10`}>
      {testData.orders.map(element => {
        return <ProfileOrder data={element} />;
      })}
    </div>
  );
}
