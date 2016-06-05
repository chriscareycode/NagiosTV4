import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['service-item'],
  classNameBindings: ['wrapperClass'],

  didInsertElement: function() {
    // var clone = this.$().clone();
    // this.$().parent().append(clone);
    // clone.fadeOut();
    // var that = this;
    // this.$().parent().animate({'max-height': 364}, 2000, function() {
    //   //that.activateSlide();  //call method to activate jquery plugin
    // });

    //this.$().parent().removeClass('animate-close');
    this.$().addClass('animate-open');
  },

  willDestroyElement: function() {
    var clone = this.$().clone();
    this.$().parent().append(clone);

    //console.log('cloned to parent');
    //console.log(clone);
    //console.log(this.$().parent());
    // clone.fadeOut();
    // this.$().parent().animate({'max-height': 0}, 2000, function() {
    //   //that.activateSlide();  //call method to activate jquery plugin
    // });

    //clone.removeClass('animate-open');
    // on animation end, remove clone dom node
    clone.addClass('animate-close').bind('animationend', function() {
      clone.remove();
    });


  },

  wrapperClass: Ember.computed('servicedetail.status', function() {
    const status = this.get('servicedetail.status');
    let classString = '';

    switch(status) {
      case 2:
        classString = 'border-green';
        break;
      case 4:
        classString = 'border-yellow';
        break;
      case 16:
        classString = 'border-red';
        break;
    }
    return classString;
  }),

  stateClass: Ember.computed('servicedetail.status', function() {
    const status = this.get('servicedetail.status');
    let classString = '';

    switch(status) {
      case 2:
        classString = 'color-green';
        break;
      case 4:
        classString = 'color-yellow';
        break;
      case 16:
        classString = 'color-red';
        break;
    }
    return classString;
  })

});
