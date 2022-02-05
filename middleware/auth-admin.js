export default function ({ store, redirect }) {
  if (!store.getters['auth/isAuth']) {
    return redirect('/admin/login?message=auth')
  }
}
