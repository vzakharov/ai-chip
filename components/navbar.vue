<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar py-0">
    <b-navbar-brand :to="{ name: 'index' }">
      <img src="/ai-chip/images/undum-3.png" alt="Undum" style="width: 32px" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- Specs, team, contact -->
        <b-nav-item :to="{ name: 'content-slug', params: { slug: 'specs' } }">Specs</b-nav-item>
        <b-nav-item :to="{ name: 'content-slug', params: { slug: 'team' } }">Team</b-nav-item>
        <b-nav-item :to="{ name: 'contact' }">Contact</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <!-- Docs, blog, careers -->
        <b-nav-item :to="{ name: 'content-slug', params: { slug: 'docs' } }">Docs</b-nav-item>
        <b-nav-item :to="{ name: 'content-slug', params: { slug: 'blog' } }">Blog</b-nav-item>
        <b-nav-item :to="{ name: 'content-slug', params: { slug: 'careers' } }">Careers</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
