import { LoadMore, BtnWrapper, Page } from './Button.styled';

export const BtnLoadMore = ({ onClick, page, totalPage }) => {
  return (
    <BtnWrapper>
      <LoadMore onClick={onClick} type="button">
        Load more
        <Page>
          {page} / {totalPage}
        </Page>
      </LoadMore>
    </BtnWrapper>
  );
};
