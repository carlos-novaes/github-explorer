import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem name="unform" description="Forms in React" url="https://github.com/unform/unform" />
      </ul>
    </section>
  );
}
