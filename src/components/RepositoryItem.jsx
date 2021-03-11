export function RepositoryItem({ name, description, url }) {
  return (
    <li>
      <strong>{name ?? 'default'}</strong>
      <p>{description ?? 'default description'}</p>

      <a href={url}>Acessar repositório </a>
    </li>
  );
}
