// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

const reviews = [
    {
      name: "Maria R.",
      role: "Small Biz Owner",
      comment: "Fia brought my brand to life — I love how she turned my ideas into a beautiful and practical design!",
      delay: "0s"
    },
    {
      name: "Lorenzo P.",
      role: "Freelancer",
      comment: "The planner template is perfect. Clean, creative, and easy to customize. Highly recommended!",
      delay: "0.3s"
    },
    {
      name: "Jasmine T.",
      role: "Online Seller",
      comment: "Working with Fia was seamless and fun. Her designs helped elevate my online shop!",
      delay: "0.6s"
    }
  ];

  const reviewsContainer = document.getElementById('reviewsContainer');

  reviews.forEach(review => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4 animate__animated animate__fadeInUp';
    col.style.animationDelay = review.delay;

    col.innerHTML = `
      <div class="card shadow-sm border-0 h-100">
        <div class="card-body">
          <p class="text-muted">"${review.comment}"</p>
          <div class="d-flex align-items-center mt-3">
            <i class="fas fa-user-circle fa-2x text-secondary me-2"></i>
            <div>
              <strong class="d-block">${review.name}</strong>
              <small class="text-muted">${review.role}</small>
            </div>
          </div>
        </div>
      </div>
    `;

    reviewsContainer.appendChild(col);
  });
</script>
