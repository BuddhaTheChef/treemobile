
module.exports = {

  // createUser: (req, res) => {
  //   req.app
  //   .get('db')
  //   .create_user(req.body)
  //   .then(user => res.json(user))
  //   .catch(err => res.json(err))
  // },

  createProject: (req, res) => {
    console.log(req.body);
    req.app
    .get('db')
    .create_project(req.body)
    .then(response => {console.log(response); res.json(response)})
    .catch(err => console.log(err))
  },
  //
  // getListings: (req,res) => {
  //   console.log(req.body);
  //   req.app
  //   .get('db')
  //   .get_listings([req.body.category, req.body.tag, req.body.value, req.body.uid])
  //   .then(data => res.json(data))
  //   .catch(err => res.json(err))
  // },
  //
  // getUserPosts: (req,res) => {
  //   req.app.get('db')
  //   .get_user_posts(req.params.uid)
  //   .then(posts => res.json(posts))
  //   .catch(err => res.json(err))
  // },
  //
  // deletePost: (req,res) => {
  //   req.app.get('db')
  //   .delete_post([req.body.post_id, req.body.uid])
  //   .then(data => res.json(data))
  //   .catch(err => res.json(err))
  // },
  //
  // updateCounter: (req, res) => {
  //   req.app.get('db')
  //   .update_viewcounter(req.params.post_id)
  //   .then(data => res.json(data))
  //   .catch(err => res.json(err))
  // },
  //
  // getCategoryTags: (req, res) => {
  //   req.app.get('db')
  //   .get_catgory_tags(req.body)
  //   .then(data => res.json(data))
  //   .catch(err => res.json(err))
  // },
  //
  // removeFav: (req,res) => {
  //   req.app.get('db')
  //   .remove_fav([req.body.uid, req.body.post_id])
  //   .then(data => res.json(data))
  //   .catch(err => res.json(err))
  // },


}
