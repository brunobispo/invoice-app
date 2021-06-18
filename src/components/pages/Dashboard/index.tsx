import { connect } from "react-redux";
import Section from "components/atoms/Section";
import DateButton from "components/molecules/DateButton";
import Button from "components/atoms/Button";
import InvoiceList from "components/organisms/InvoiceList";
import TotalSummary from "components/organisms/TotalSummary";
import { InvoiceType } from "types";
import { RootState, AppDispatch } from "state/store";
import {
  getCurrentMonth,
  getCurrentMonthInvoices,
  getCurrentMonthPaid,
  getCurrentMonthPending,
  getCurrentMonthRefunded,
  getCurrentMonthTotal,
} from "state/dashboard/selectors";
import { setCurrentMonth } from "state/dashboard";

type DashboardProps = {
  total: number;
  pending: number;
  paid: number;
  refunded: number;
  items: InvoiceType[];
  currentMonth: Date;
  onChangeMonth: (date: Date) => void;
};

const Dashboard = ({
  total,
  pending,
  paid,
  refunded,
  items,
  currentMonth,
  onChangeMonth,
}: DashboardProps) => (
  <>
    <Section>
      <DateButton date={currentMonth} onChange={onChangeMonth} />
    </Section>
    <Section>
      <TotalSummary
        total={total}
        pending={pending}
        paid={paid}
        refunded={refunded}
      />
    </Section>
    <Section alignItems="right">
      <Button>+ Create Invoice</Button>
    </Section>
    <Section>
      <InvoiceList items={items} />
    </Section>
  </>
);

const mapStateToProps = (state: RootState) => ({
  items: getCurrentMonthInvoices(state),
  total: getCurrentMonthTotal(state),
  pending: getCurrentMonthPending(state),
  refunded: getCurrentMonthRefunded(state),
  paid: getCurrentMonthPaid(state),
  currentMonth: getCurrentMonth(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onChangeMonth: (date: Date) => dispatch(setCurrentMonth(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
