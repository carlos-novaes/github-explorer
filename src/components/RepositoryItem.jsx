export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name ?? 'default'}</strong>
      <p>{repository.description ?? 'default description'}</p>

      <a href={repository.html_url}>Acessar repositório </a>
    </li>
  );
}
