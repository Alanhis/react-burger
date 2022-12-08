import PagesStyle from './pages.module.css';
import { data } from '../../utils/testdata';
import FeedOrder from '../feed-order/feed-order';
export function FeedPage() {
  const testData = data;
  let doneOrder: any[] = [];
  let pendingOrder: any[] = [];
  testData.orders.map(element => {
    if (element.status == 'done') {
      doneOrder.push(element.number);
    } else if (element.status === 'pending') {
      pendingOrder.push(element.number);
    }
  });
  return (
    <div className={`${PagesStyle.feedPage} `}>
      <div>
        <p className="text text_type_main-large"> Лента заказов</p>
        <div className={`${PagesStyle.scroller} custom-scroll`}>
          {testData.orders.map(element => {
            return <FeedOrder data={element} />;
          })}
        </div>
      </div>
      <>
        <div className="pl-15">
          <div className={`${PagesStyle.infoPanel}`}>
            <div className="pr-10">
              <p>Готовы:</p>
              {doneOrder.length ? (
                <div>
                  {doneOrder.map((element, index) => {
                    if (index > 10) {
                      return;
                    }

                    if (index % 2 === 0) {
                      return (
                        <div className={`${PagesStyle.column} `} key={index}>
                          <div className="pr-4">{element}</div>
                          {doneOrder[index + 1] ? (
                            <div>{doneOrder[index + 1]}</div>
                          ) : null}
                        </div>
                      );
                    }
                  })}
                </div>
              ) : (
                <div> --</div>
              )}
            </div>
            <div>
              <p>В работе:</p>
              {pendingOrder.length ? (
                <div>
                  {pendingOrder.map((element, index) => {
                    if (index > 10) {
                      return;
                    }

                    if (index % 2 === 0) {
                      return (
                        <div className={`${PagesStyle.column} `} key={index}>
                          <div className="pr-4">{element}</div>
                          {pendingOrder[index + 1] ? (
                            <div>{pendingOrder[index + 1]}</div>
                          ) : null}
                        </div>
                      );
                    }
                  })}
                </div>
              ) : (
                <div> --</div>
              )}
            </div>
          </div>
          <div className="pt-15">
            <p className="text text_type_main-medium">
              Выполнено за все время:
            </p>
            <p className="text text_type_digits-large">{testData.total}</p>
          </div>
          <div className="pt-15">
            <p className="text text_type_main-medium">Выполнено за сегодня:</p>
            <p className="text text_type_digits-large">{testData.totalToday}</p>
          </div>
        </div>
      </>
    </div>
  );
}
