import React, {useEffect, useState} from "react";
import useGithub from "../../hooks/github-hooks";
import { RepositoryItem } from "../Repository-itens";
import * as S from "./styled";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserStarred(githubState.user.login);
      getUserRepos(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);


  return (
    <>
      {hasUserForSearchrepos ? (
    <S.WapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WapperTabList>
        <S.WapperTab>Repositories</S.WapperTab>
        <S.WapperTab>Starred</S.WapperTab>
      </S.WapperTabList>

      <S.WapperTabPanel>
      <S.WrapperList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
      </S.WapperTabPanel>

      <S.WapperTabPanel>
      <S.WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
      </S.WapperTabPanel>

    </S.WapperTabs>
       ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
