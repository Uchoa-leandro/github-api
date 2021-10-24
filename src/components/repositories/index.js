import React from "react";
import { RepositoryItem } from "../Repository-itens";
import * as S from "./styled";

const Repositories = () => {
  return (
    <S.WapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WapperTabList>
        <S.WapperTab>Repositories</S.WapperTab>
        <S.WapperTab>Starred</S.WapperTab>
      </S.WapperTabList>
      <S.WapperTabPanel>
        <RepositoryItem
          name="Dio_first_challenge"
          linkToRepo="https://github.com/Uchoa-leandro/Dio_first_challenge"
          fullName="Uchoa-leandro/Dio_first_challenge"
        />
      </S.WapperTabPanel>
      <S.WapperTabPanel>
        <RepositoryItem
          name="Simon-game"
          linkToRepo="https://github.com/Uchoa-leandro/Simon-game"
          fullName="Uchoa-leandro/Simon-game"
        />
      </S.WapperTabPanel>
    </S.WapperTabs>
  );
};

export default Repositories;
