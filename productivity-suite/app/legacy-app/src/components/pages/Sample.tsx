import { DOMAttributes } from 'react'
import { getBus } from 'piercing-library'

export function Sample() {
  const onClickLink: DOMAttributes<HTMLAnchorElement>['onClick'] = (e) => {
    e.preventDefault()
    getBus().dispatch("href", '/login');
  }

  return (
    <div style={{
      padding: '100px',
      background: '#ffcccc'
    }}>
      <p>サンプルページ</p>
      <a href='/login' onClick={onClickLink}>Login Link</a>
      <piercing-fragment-outlet fragment-id="login" />
    </div>
  );
}
